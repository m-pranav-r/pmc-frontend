import { FC } from "react";
import { NavBar } from "./nav";
import { BaseWrapper } from "./base/basewrapper";
import { UserListingForm } from "./listing/listingself";

import {
    createBrowserRouter,
} from 'react-router-dom'

import { Outlet, RouterProvider } from "react-router";
import { Box } from "@chakra-ui/react";

const Test0: FC = () => {
    return <h1>Home</h1>
}

const Test3: FC = () => {
    return <h1>Account</h1>
}

const RootElem: FC = () => {
    return (
        <Box>
            <NavBar />
            <Outlet />
        </Box>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootElem />,
        children: [
            {
                path: 'home',
                element: <Test0 />
            },
            {
                path: 'listings',
                element: <BaseWrapper />
            },
            {
                path: 'listing',
                element: <UserListingForm />
            },
            {
                path: 'account',
                element: <Test3 />
            }
        ],
    },
    {
        path: "*",
        element: <p>Not Found</p>
    }
])

export const MainWrapper: FC = () => {
    return (
        <div className="main-wrapper">
            <RouterProvider router={router} />
        </div >
    );
}