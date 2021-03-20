import React from "react";
import Table from "./html/Table";
import {connect} from "react-redux";
import {fetch} from "../state/actions";
import {withRouter} from "react-router";

class UsersTable extends React.Component {

    static headers = [
        'id', 'username', 'email'
    ]

    componentDidMount() {
        this.props.fetch();
    }

    render() {
        const dataForTable = this.props.users.map(user => ({
            data: [
                user.id, user.username, user.email
            ],
            callback: () => {
                this.props.history.push('/edit/' + user.id);
            }
        }));

        return (
            <Table headers={UsersTable.headers} data={dataForTable}/>
        )
    }
}

const mapStateToProps = state => ({
   users: state.users
});

const mapDispatchToProps = dispatch => ({
   fetch: () => dispatch(fetch())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersTable));