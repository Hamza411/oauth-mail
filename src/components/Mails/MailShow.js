import React from 'react';
import { connect } from 'react-redux';
import { fetchMessage } from '../../actions';

class MailShow extends React.Component {

    componentDidMount() {
        this.props.fetchMessage(this.props.match.params.id)
        console.log("########", this.props.fetchMessage(this.props.match.params.id))
    }
    render() {
        if (!this.props.mail) {
            console.log(this.props.mail)
            return <div> Loading . . .</div>
        }
        return (
            <div>
                <h4>Mail</h4>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { mail: state.mail[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchMessage })(MailShow);