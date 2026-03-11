import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface Visitor {
    ip: string;
    visited: {
        optInPage: boolean;
        salesPage: boolean;
        bridgePage: boolean;
        presentationPage: boolean;
    };
    timestamp: Time;
}
export interface User {
    name: string;
    email: string;
    timestamp: Time;
}
export interface backendInterface {
    adminLogin(password: string): Promise<boolean>;
    setWebhookUrl(password: string, url: string): Promise<boolean>;
    getWebhookUrl(password: string): Promise<string>;
    createUser(name: string, email: string): Promise<boolean>;
    getAllUsers(): Promise<Array<User>>;
    getAllVisitors(): Promise<Array<Visitor>>;
    getAnalytics(): Promise<{
        mentor: string;
        totalVisitors: bigint;
        totalSales: bigint;
        coupon: string;
        totalOptIns: bigint;
    }>;
    getCompletedOptIns(): Promise<bigint>;
    getCouponCode(): Promise<string>;
    getMentorInfo(): Promise<string>;
    getRevisiters(): Promise<Array<string>>;
    getSalesPageViews(): Promise<bigint>;
    getVisitorPath(ip: string): Promise<{
        optInPage: boolean;
        salesPage: boolean;
        bridgePage: boolean;
        presentationPage: boolean;
    }>;
    incrementCompletedOptIns(): Promise<bigint>;
    incrementSalesPageViews(): Promise<bigint>;
    trackVisitor(ip: string): Promise<void>;
    updateVisitor(ip: string, page: string): Promise<boolean>;
}
