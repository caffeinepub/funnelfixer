import Text "mo:core/Text";
import Map "mo:core/Map";
import Time "mo:core/Time";
import List "mo:core/List";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";

actor {
  type User = {
    name : Text;
    email : Text;
    timestamp : Time.Time;
  };

  module User {
    public func compare(user1 : User, user2 : User) : Order.Order {
      Text.compare(user1.email, user2.email);
    };
  };

  type Visitor = {
    ip : Text;
    visited : { bridgePage : Bool; optInPage : Bool; presentationPage : Bool; salesPage : Bool };
    timestamp : Time.Time;
  };

  module Visitor {
    public func compare(visitor1 : Visitor, visitor2 : Visitor) : Order.Order {
      switch (visitor1.timestamp < visitor2.timestamp) {
        case (true) { #less };
        case (false) {
          switch (visitor1.timestamp > visitor2.timestamp) {
            case (true) { #greater };
            case (false) { Text.compare(visitor1.ip, visitor2.ip) };
          };
        };
      };
    };
  };

  let users = Map.empty<Text, User>();
  let visitors = Map.empty<Text, Visitor>();
  var salesPageViews = 0;
  var completedOptIns = 0;

  public shared ({ caller }) func createUser(name : Text, email : Text) : async Bool {
    if (Text.equal(name, "")) { Runtime.trap("Name cannot be empty") };
    if (Text.equal(email, "")) { Runtime.trap("Email cannot be empty") };

    switch (users.get(email)) {
      case (?_) { Runtime.trap("User with this email already exists") };
      case (null) {
        let newUser : User = {
          name;
          email;
          timestamp = Time.now();
        };
        users.add(email, newUser);
        true;
      };
    };
  };

  public query ({ caller }) func getSalesPageViews() : async Nat {
    salesPageViews;
  };

  public shared ({ caller }) func incrementSalesPageViews() : async Nat {
    salesPageViews += 1;
    salesPageViews;
  };

  public shared ({ caller }) func incrementCompletedOptIns() : async Nat {
    completedOptIns += 1;
    completedOptIns;
  };

  public shared ({ caller }) func trackVisitor(ip : Text) : async () {
    switch (visitors.get(ip)) {
      case (null) {
        let newVisitor : Visitor = {
          ip;
          visited = { bridgePage = true; optInPage = false; presentationPage = false; salesPage = false };
          timestamp = Time.now();
        };
        visitors.add(ip, newVisitor);
      };
      case (?visitor) {
        let updatedVisitor : Visitor = {
          ip;
          visited = {
            bridgePage = true;
            optInPage = visitor.visited.optInPage;
            presentationPage = visitor.visited.presentationPage;
            salesPage = visitor.visited.salesPage;
          };
          timestamp = Time.now();
        };
        visitors.add(ip, updatedVisitor);
      };
    };
  };

  public shared ({ caller }) func updateVisitor(ip : Text, page : Text) : async Bool {
    func updatePages(visits : { bridgePage : Bool; optInPage : Bool; presentationPage : Bool; salesPage : Bool }, page : Text) : { bridgePage : Bool; optInPage : Bool; presentationPage : Bool; salesPage : Bool } {
      switch (page) {
        case ("bridgePage") {
          { visits with bridgePage = true };
        };
        case ("optInPage") {
          { visits with optInPage = true };
        };
        case ("presentationPage") {
          { visits with presentationPage = true };
        };
        case ("salesPage") {
          { visits with salesPage = true };
        };
        case (_) { visits };
      };
    };

    switch (visitors.get(ip)) {
      case (null) { false };
      case (?visitor) {
        let updatedVisitor : Visitor = {
          ip;
          visited = updatePages(visitor.visited, page);
          timestamp = Time.now();
        };
        visitors.add(ip, updatedVisitor);
        true;
      };
    };
  };

  public query ({ caller }) func getAllUsers() : async [User] {
    users.values().toArray().sort();
  };

  public query ({ caller }) func getAllVisitors() : async [Visitor] {
    visitors.values().toArray().sort();
  };

  public query ({ caller }) func getRevisiters() : async [Text] {
    let revisitors = List.empty<Text>();
    for ((ip, visitor) in visitors.entries()) {
      if (visitor.visited.optInPage and visitor.visited.presentationPage and visitor.visited.salesPage) {
        revisitors.add(ip);
      };
    };
    revisitors.toArray();
  };

  public query ({ caller }) func getVisitorPath(ip : Text) : async { bridgePage : Bool; optInPage : Bool; presentationPage : Bool; salesPage : Bool } {
    switch (visitors.get(ip)) {
      case (null) { Runtime.trap("Visitor not found") };
      case (?visitor) { visitor.visited };
    };
  };

  public query ({ caller }) func getCompletedOptIns() : async Nat {
    completedOptIns;
  };

  public query ({ caller }) func getCouponCode() : async Text {
    "SYSTEMLEAD";
  };

  public query ({ caller }) func getMentorInfo() : async Text {
    "Ashfaq Sheikh";
  };

  public query ({ caller }) func getAnalytics() : async {
    totalVisitors : Nat;
    totalOptIns : Nat;
    totalSales : Nat;
    mentor : Text;
    coupon : Text;
  } {
    let totalVisitors = visitors.size();
    let totalOptIns = completedOptIns;
    let totalSales = salesPageViews;
    let mentor = "Ashfaq Sheikh";
    let coupon = "SYSTEMLEAD";

    {
      totalVisitors;
      totalOptIns;
      totalSales;
      mentor;
      coupon;
    };
  };
};
