import React from 'react'
import Card from './Card'

class Experience extends React.Component {

    constructor() {
        super();
        this.state = {
            icon: 'briefcase'
        }
    }

    render() {
        return (
            <div className="tile is-vertical is-4 is-parent experience">

                <Card icon={this.state.icon} secondIcon="exclamation-circle" title="IntentMedia" classes="intent"
                      doAction={() => {
                          return this.props.updateModalStatus('INTENT_MEDIA')
                      }}>
                    <div className="role subtitle">Software Engineer, People Manager</div>
                    <div className="subtitle is-6 date">Mar 2015 – Now</div>
                    <div className="subtitle is-6 location">New York, New York</div>
                </Card>

                <Card icon={this.state.icon} secondIcon="exclamation-circle" title="Hackerati" classes="hack"
                      doAction={() => {
                          return this.props.updateModalStatus('HACKERATI')
                      }}>
                    <div className="role subtitle">Software Engineer</div>
                    <div className="subtitle is-6 date">Jan 2015 – Sep 2015</div>
                    <div className="subtitle is-6 location">New York, New York</div>
                </Card>

                <Card icon={this.state.icon} secondIcon="exclamation-circle"  title="Optivon" classes="optivon"
                      doAction={() => {
                          return this.props.updateModalStatus('OPTIVON')
                      }}>
                    <div className="role subtitle">Software Engineer</div>
                    <div className="subtitle is-6 date">Oct 2013 – Dec 2014</div>
                    <div className="subtitle is-6 location">San Juan, Puerto Rico</div>
                </Card>

            </div>
        )
    }

}

export default Experience;