import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Typography from '@mui/material/Typography';

const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 38,
  },
  [`&.${stepConnectorClasses.line}`]: {
    height: 2,
    border: 0,
    backgroundColor: theme.palette.grey[300],
    borderRadius: 1,
  },
}));

const CustomStepIconRoot = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
}));

const Circle = styled('div')(({ ownerState }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  border: `2px solid ${ownerState.active ? 'gray' : 'lightgray'}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: ownerState.active ? '#88c8bc' : '#595959',
  backgroundColor: 'white',
  fontSize: '1rem',
  fontFamily: 'Montserrat, Arial, sans-serif',
  fontWeight: 'normal',
  zIndex:'2'
}));

const StepText = styled(Typography)(({ theme}) => ({
  marginTop: theme.spacing(1),
  color: '#5959595',
  textTransform: 'uppercase',
  fontWeight: 'normal',
  letterSpacing: '1px',
  fontSize: '12px',
  fontFamily: 'Montserrat, Arial, sans-serif'
}));

function CustomStepIcon(props) {
  const { active, completed, icon } = props;

  return (
    <CustomStepIconRoot ownerState={{ active, completed }}>
      <Circle ownerState={{ active }}>{icon}</Circle>
      <StepText ownerState={{ active }}>{steps[icon - 1]}</StepText>
    </CustomStepIconRoot>
  );
}

CustomStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const steps = ['Shopping Cart', 'Checkout', 'Order Complete'];

export default function CustomizedSteppers() {
  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Stepper alternativeLabel activeStep={0} connector={<CustomConnector />}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={(props) => <CustomStepIcon {...props} icon={ `0` + `${index + 1}`} />}>
              {/* No need for additional label here; handled in CustomStepIcon */}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
