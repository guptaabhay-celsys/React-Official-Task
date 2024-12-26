import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Typography } from "@mui/material";
import { SetStateAction } from "react";

export type RadioButtonType = {
  label: string,
  name: string,
  value: string,
  checkedValue: string,
  onChange: (event: { target: { value: SetStateAction<string>; }; }) => void,
  style: React.CSSProperties,
  cosmetic: React.CSSProperties
}

// eslint-disable-next-line react/prop-types
export default function RadioButton({ label, name, value, checkedValue, onChange, style, cosmetic }: RadioButtonType) {
  return (
    <FormControl>
      <FormControlLabel
        name={name}
        control={
          <Radio
            sx={{
              color: "#909090",
              "&.Mui-checked": {
                color: "#909090",
              },
            }}
            checked={value === checkedValue}
            onChange={onChange}
            value={value} 
          />
        }
        label={<Typography sx={{ fontSize: '13px' }}>{label}</Typography>}
        sx={{
          ...style,
          ...cosmetic
        }}
      />
    </FormControl>
  );
}
