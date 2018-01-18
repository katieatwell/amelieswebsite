import React, { Component } from 'react';
import { Table } from "reactstrap";

export const MenuPanel = props =>
    <div>
    <Table hover>
        <tbody>
            <tr>
                <a href="/cafe-breakfast">Breakfast</a>
            </tr>
            <tr>
               <a href="/cafe-lunchdinner">Lunch/Dinner</a>
            </tr>
            <tr>
                <a href="/cafe-coffeetea">Coffee/Tea</a>
            </tr>
            <tr>
                <a href="/cafe-dessertspastries">Desserts/Pastries</a>
            </tr>
        </tbody>
    </Table> 
    </div>;
