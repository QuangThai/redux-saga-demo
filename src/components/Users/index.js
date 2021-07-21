import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import React, { memo, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { getListUser } from "../../redux/actions/user";
import {
  makeSelectStatusFlags,
  makeSelectUsers
} from "../../redux/selectors/user";
import Scrollable from "../Scrollable";
import Spinner from "../Spinner";
import "./styles.css";

function Users(props) {
  const { triggerGetListUser, listUser, statusFlags } = props;

  useEffect(() => {
    triggerGetListUser();
  }, []);

  return (
    <>
      <Container maxWidth="sm" style={{ marginTop: 20, background: "#f0f0f0" }}>
        <Scrollable>
          {statusFlags.isLoading === true && <Spinner />}
          <List>
            {listUser.map(item => (
              <ListItem alignItems="flex-start" key={item.id} divider>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                        {item.username}
                      </Typography>
                      {item.email}
                    </React.Fragment>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Scrollable>
      </Container>
    </>
  );
}

Users.propTypes = {
  triggerGetListUser: PropTypes.func,
  listUser: PropTypes.array,
  statusFlags: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  listUser: makeSelectUsers(),
  statusFlags: makeSelectStatusFlags()
});

function mapDispatchToProps(dispatch) {
  return {
    triggerGetListUser: () => dispatch(getListUser())
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Users);
