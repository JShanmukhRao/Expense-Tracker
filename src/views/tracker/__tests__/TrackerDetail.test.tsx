import { render } from "@testing-library/react"
import TrackerDetail from "../TrackerDetail"
import React from "react"
import { BrowserRouter } from "react-router-dom"


describe('Tracker Detail Component',()=>{

    test('Render properly',async ()=>{
        await React.act(async ()=>{
            render(
                <BrowserRouter>
                    <TrackerDetail />
                </BrowserRouter>
            )
        });
    })
})