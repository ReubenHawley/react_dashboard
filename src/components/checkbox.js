import {Checkbox, FormControlLabel} from "@material-ui/core";

export default function CheckboxExample(){
    const [checked, setChecked] = React.useState(true)
    return(
        <FormControlLabel
            control={<Checkbox
                checked ={checked}
                onChange ={(e)=> setChecked(e.target.checked)}
                color={'primary'}
                inputProps={{
                    'aria-label': 'secondary checkbox'
                }}
            />}
            label={"testing Checkbox"}/>
    )
}
