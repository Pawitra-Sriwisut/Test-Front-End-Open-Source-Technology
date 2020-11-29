import React, { Component } from "react";
import NewsList from "./NewsList"
import { Table } from 'reactstrap';
import logo from '../pic/logotype.svg'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Table className="Navbar">
                    <tbody>
                        <tr>
                            <td>
                                <img src={logo} width="20" />
                            </td>
                            <td>
                                <a href="index.html" className="navbar-brand">New Today!!</a>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <NewsList />
            </div>
        )
    }
}