import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const headers: Readonly<Record<string, string | boolean>> = {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
};

const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
    try {
        const token = localStorage.getItem("token");

        if (token != null) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    } catch (error) {
        throw new Error(error);
    }
};

class Http {
    private instance: AxiosInstance | null = null;

    private get http(): AxiosInstance {
        return this.instance != null ? this.instance : this.initHttp();
    }

    initHttp() {
        const http = axios.create({
            baseURL: "https://thebetter.bsgroup.eu/",
            headers,
        });

        http.interceptors.request.use(injectToken, (error) => Promise.reject(error));
        this.instance = http;
        return http;
    }

    post<T = any, R = AxiosResponse<T>>(
        url: string,
        data?: T
        ): Promise<R> {
        return this.http.post<T, R>(url, data);
    }
}

export const http = new Http();
