import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filter = createFilterOptions();

export default function FreeSoloCreateOption({selectLabel, value, setValue, buttonRef, optionList}) {

  return (
    <Autocomplete
      value={value}
      fullWidth
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      onInputChange={(event)=>{
        if(event)
          setValue(event.target.value)
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id={`autoComplete-${selectLabel}`}
      options={optionList}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        return option;
      }}
      renderOption={(props, option) => <li {...props}>{option}</li>}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label={selectLabel} 
          onKeyDown = {(e)=>{
            if (e.code === 'Enter' && e.target.value)
              buttonRef.current.click()
          }}
        />
      )}
    />
  );
}
