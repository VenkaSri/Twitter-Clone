import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const Head = ({ title, description }) => {
  return (
    <Helmet title={title ? `${title} / X` : undefined} defaultTitle="/ X">
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Head.defaultProps = {
  title: "",
  description: "",
};
