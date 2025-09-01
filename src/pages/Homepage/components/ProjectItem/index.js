import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function ProjectItem({ icon, title, name }) {
  return (
    <MKBox
      component={Link}
      display="flex"
      alignItems="center"
      p={2}
      sx={{
        width: "100%",
        borderRadius: ({ borders: { borderRadius } }) => borderRadius.lg,
        transition: "background-color 300ms ease-in-out",
        "&:hover": {
          backgroundColor: ({ palette: { grey } }) => grey[200],
        },
      }}
    >
      <MKBox
        display="grid"
        placement="center"
        width="3rem"
        height="3rem"
        borderRadius="lg"
        variant="gradient"
        bgColor="info"
        color="white"
        coloredShadow="info"
        sx={{ flexShrink: 0, placeItems: "center" }}
      >
        <Icon fontSize="small">{icon.name}</Icon>
      </MKBox>
      <MKTypography variant="body2" color="text" pl={2}>
        <strong>
          {title.split("<br />").map((line, index, arr) => (
            <span key={line}>
              {line}
              {index < arr.length - 1 && <br />}
            </span>
          ))}
        </strong>
        <br />
        {name}
      </MKTypography>
    </MKBox>
  );
}

ProjectItem.propTypes = {
  icon: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ProjectItem;
