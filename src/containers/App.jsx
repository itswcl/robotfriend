import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: "",
        }
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(users => { this.setState({ robots: users }) })
    }
    // need "=" to indicate it's from parent otherwise it's check the child component
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state
        const filteredRobots = robots.filter(robot => {
            const { name } = robot
            const searchString = searchfield.toLowerCase()
            return name.toLowerCase().includes(searchString)
        })
        if (robots.length === 0) {
            return <h1>loading....</h1>
        }

        return (
            <div className='tc' >
                <h1>RobotFriends</h1>
                <SearchBox onSearchChange={this.onSearchChange} searchfield={this.state.searchfield} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
}

export default App