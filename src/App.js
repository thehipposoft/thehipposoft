import React from 'react';
import './App.css';
//Components
import Header from './components/header';

function App() {
    return (
        <div className="App">
            <Header>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                {/*<NavItem href="/featured" isActive>Featured</NavItem>
                <NavItem href="/popular">Popular</NavItem>
                <NavItem href="/recent">Recent</NavItem>*/}
            </Header>
            <div>
                Hippo body
            </div>
        </div>
    );
}

export default App;
