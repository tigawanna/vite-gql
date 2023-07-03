/// <reference types="vite/client" />

import * as React from "react";
declare interface ImportMetaEnv {
    [key: string]: string;
    VITE_ENV: "production" | "development";
    VITE_GH_PAT: string;
}


// declare module "relay-runtime" {
//     interface PayloadError {
//         errors?: Record<string, string[] | undefined>;
//     }
// }

