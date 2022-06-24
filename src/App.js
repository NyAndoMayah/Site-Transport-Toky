import './App.css';
import './scripts.js';
import { Tfoot } from './components/Tfoot.js';
import { Thead } from './components/Thead.js';
import { table } from './donneestable';
import { TableItem } from './components/TableItem';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { useState } from 'react';
import { Footer } from './components/Footer';
import { TableDescription } from './components/TableDescription';
function App() {
    const [sideBarCollapsed, setSidebarCollapsed] = useState('sb-nav-fixed');

    return (
        <div class={sideBarCollapsed}>
            <Navbar onClickFunction={
                function () {
                    setSidebarCollapsed(sideBarCollapsed.includes('toggled') ? 'sb-nav-fixed' : 'sb-nav-fixed sb-sidenav-toggled')
                }
            }>hh</Navbar>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar ></Sidebar>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <div class="container-fluid px-4">
                            <TableDescription/>
                            <div class="card mb-4">
                                <div class="card-header">
                                    <i class="fas fa-table me-1"></i>
                                    DataTable Example
                                </div>
                                <div class="card-body">
                                    <table id="datatablesSimple" class="table table-bordered">
                                        <Thead />
                                        <Tfoot />
                                        <tbody>
                                            {table.map(item => (<TableItem {...item}></TableItem>))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </main>
                    <Footer/>
                </div>
            </div>
        </div>);
}
export default App;

