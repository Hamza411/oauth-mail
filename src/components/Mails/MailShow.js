import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMessage } from '../../actions';

class MailShow extends React.Component {

    componentDidMount() {
        this.props.fetchMessage(this.props.match.params.id)
    }

    renderMsg = () => {
        const data = this.props.mail;
        console.log(data)
        return data.map((thread, index) => {
            return (
                <div className="item" key={index}>
                    {/* {thread.labelIds[2]} */}
                    <br />
                    <div className="content">
                        {thread.snippet}
                    </div>
                </div>
            )
        })
    }

    render() {
        if (!this.props.mail) {
            return <div> Loading . . .</div>
        }
        return (
            <div>
                {console.log(this.props.mail)}
                {this.renderMsg()}
                <Link to="/" className="ui button">Back</Link>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    // return { mail: state.mail[ownProps.match.params.id] }
    return { mail: Object.values(state.mails), }

}

export default connect(mapStateToProps, { fetchMessage })(MailShow);