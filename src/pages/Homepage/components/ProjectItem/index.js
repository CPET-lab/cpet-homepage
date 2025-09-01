import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function NoticeItem({ icon, title, route }) {
  return (
    <MKBox
      component={Link}
      to={route}
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
      <MKTypography variant="h6" fontWeight="regular" sx={{ ml: 2 }}>
        {title}
      </MKTypography>
      <Icon sx={{ ml: "auto", color: ({ palette: { text } }) => text.secondary }}>
        chevron_right
      </Icon>
    </MKBox>
  );
}

NoticeItem.propTypes = {
  icon: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default NoticeItem;
