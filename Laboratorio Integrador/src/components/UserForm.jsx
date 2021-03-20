import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";

import {create, edit, fetchUser} from "../state/actions";

class UserForm extends React.Component {

    static MODES = {
        CREATE: "CREATE",
        EDIT: "EDIT"
    }

    mode;

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        }

        if(props.userId) {
            this.mode = UserForm.MODES.EDIT
        } else {
            this.mode = UserForm.MODES.CREATE
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if(this.mode === UserForm.MODES.EDIT) {
            this.props.fetch(this.props.userId);
        }
    }

    componentDidUpdate(prevProps) {
        if(this.mode === UserForm.MODES.CREATE) {
            if(this.props.createResult != prevProps.createResult && this.props.createResult) {
                this.props.history.push('/');
            }
        } else {
            if(this.props.editResult != prevProps.editResult && this.props.editResult) {
                this.props.history.push('/');
            }
        }


        if(this.props.user != prevProps.user && this.props.user.username) {
            this.setState({
                username: this.props.user.username,
                password: this.props.user.password,
                email: this.props.user.email
            })
        }
    }

    handleInputChange(name) {
        return (e) => {
            this.setState({
                [name]: e.currentTarget.value
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.mode === UserForm.MODES.CREATE) {
            this.props.create(this.state);
        } else {
            this.props.edit(this.props.userId,this.state);
        }

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" value={this.state.username} onChange={this.handleInputChange('username')} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleInputChange('email')} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handleInputChange('password')} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }

}

const mapStateToProps = state => ({
   editResult: state.editResult,
    createResult: state.createResult,
    user: state.editUser
});

const mapDispatchToProps = dispatch => ({
    create: (data) => dispatch(create(data)),
    edit: (id,data) => dispatch(edit(id,data)),
    fetch: (id) => dispatch(fetchUser(id))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UserForm));