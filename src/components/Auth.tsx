// src/context/Auth.tsx
import React, { createContext, useState, ReactNode } from 'react';

export interface AuthType {
    user:{
        username: string;
        userId: string; 
    } | null;
    login: (userData: { username: string; userId: string }) => void
    logout: () => void;
}

const Authorization = createContext<AuthType | null>(null);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] =  useState<{ username: string, userId: string } | null>(null);

    const login = (userData: {username:string, userId:string}) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <Authorization.Provider value={{ user, login, logout }}>
        {children}
        </Authorization.Provider>
    );
};

export default Authorization;
