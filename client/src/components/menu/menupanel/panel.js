import React, { Component } from 'react';
import { Table } from "reactstrap";

export const MenuPanel = props =>
    <div>
    <Table hover>
        <tbody>
            <tr>
                <a href="/cafemenu/breakfast">Breakfast</a>
            </tr>
            <tr>
               <a href="/cafemenu/lunchdinner">Lunch/Dinner</a>
            </tr>
            <tr>
                <a href="/cafemenu/coffeetea">Coffee/Tea</a>
            </tr>
            <tr>
                <a href="/cafemenu/dessertspastries">Desserts/Pastries</a>
            </tr>
        </tbody>
    </Table> 
    </div>;
