import React from 'react';
import { Switch, Route } from 'react-router-dom';

//my components
import Resume from './Resume';
import About from './About';
import Projects from './Projects'

export default function SwitchPage() {
    return (
        <Switch>
            <Route exact path='/' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/resume' component={Resume} />
        </Switch>
    )
}