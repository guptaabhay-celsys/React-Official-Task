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
    top: 40,
  },
  [`&.${stepConnectorClasses.line}`]: {
    height: 2,
    border: 0,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[300],
    borderRadius: 1,
  },
}));

const CustomStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  ...(ownerState.active && {
    color: theme.palette.primary.main,
  }),
}));

const Circle = styled('div')(({ ownerState }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  border: `2px solid ${ownerState.active || ownerState.completed ? 'lightgray' : '#f0f0f0'}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: ownerState.active || ownerState.completed ? '#88c8bc' : '#595959',
  backgroundColor: '#fff',
  fontSize: '1rem',
  fontFamily: 'Montserrat, Arial, sans-serif',
  fontWeight: 'normal',
  zIndex: 2
}));

const StepText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  color: '#595959',
  textTransform: 'uppercase',
  fontWeight: 'normal',
  letterSpacing: '1px',
  fontSize: '12px',
  fontFamily: 'Montserrat, Arial, sans-serif',
}));


function CustomStepIcon(props) {
  const { active, completed, icon } = props;

  return (
    <CustomStepIconRoot ownerState={{ active, completed }}>
      <Circle ownerState={{ active, completed }}>{icon}</Circle>
      <StepText>{steps[icon - 1]}</StepText>
    </CustomStepIconRoot>
  );
}

CustomStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const steps = ['Shopping Cart', 'Checkout', 'Order Complete'];

// eslint-disable-next-line react/prop-types
export default function CustomizedSteppers({ activeStep, cosmetic }) {
  return (
    <Stack sx={{ width: '100%', ...cosmetic }} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={activeStep} 
        connector={<CustomConnector />}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={(props) => (
                <CustomStepIcon {...props} active={index <= activeStep} completed={index < activeStep} icon={`0` + `${index + 1}`} />
              )}
            />
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}

CustomizedSteppers.propTypes = {
  activeStep: PropTypes.number.isRequired,
};
