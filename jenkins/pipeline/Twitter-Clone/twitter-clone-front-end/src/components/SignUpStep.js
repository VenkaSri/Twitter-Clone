import React from "react";

import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import PropTypes from "prop-types";

const propTypes = {
  header: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

const SignUpStep = ({ header, content, footer }) => {
  return (
    <>
      <DialogTitle style={{ padding: 0 }}>{header}</DialogTitle>
      <DialogContent style={{ padding: 0, marginTop: 10 }}>
        {content}
      </DialogContent>
      <DialogActions style={{ padding: 0 }}>
        {footer}
      </DialogActions>
    </>
  );
};

SignUpStep.propTypes = propTypes;
export default SignUpStep;
