import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface LayoutContextType {
    title: string;
    icon: string;
    headerContent: ReactNode;
    footerContent: ReactNode;
    setTitle: (title: string) => void;
    setIcon: (logo: string) => void;
    setHeaderContent: (content: ReactNode) => void;
    setFooterContent: (content: ReactNode) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const useLayout = () => {
    const context = useContext(LayoutContext);
    if (context === undefined) {
        throw new Error("useLayout must be used within a LayoutProvider");
    }
    return context;
};

export const LayoutProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [title, setTitle] = useState<string>("Default Title");
    const [icon, setIcon] = useState<string>("./assets/img/logo.svg");
    const [headerContent, setHeaderContent] = useState<ReactNode>();
    const [footerContent, setFooterContent] = useState<ReactNode>();
    // const [name, setName] = useState<string>("Lenny Rose");
    // const [profileImage, setProfileImage] = useState<string>("/assets/img/blog-author.jpg");
    // const [backgroundImage, setBackgroundImage] = useState<string>("/assets/img/bg-hero.jpg");

    const value = {
        title,
        icon,
        headerContent,
        footerContent,
        setTitle,
        setIcon,
        setHeaderContent,
        setFooterContent
    };

    return (
        <LayoutContext.Provider value={value}>
            {children}
        </LayoutContext.Provider>
    )
}