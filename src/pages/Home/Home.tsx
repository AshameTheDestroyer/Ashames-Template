import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from "../../store/features/Counter/CounterSlice";

import './Home.scss';

import Page from "../../components/Page/Page";

export default function Home(): React.ReactElement {
    const { value } = useSelector(counterSlice.selectSlice);
    const Dispatch = useDispatch();

    return (
        <Page id="home-page">
            <h1>Welcome Back!</h1>
            <section>
                <p>{value}</p>
                <button onClick={_ => Dispatch(counterSlice.actions.increment())}>Increment</button>
            </section>
        </Page>
    );
}