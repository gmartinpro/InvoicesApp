import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  Button,
  InputAdornment
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// const DevisMain = styled.form``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const InlineDiv = styled.div`
  display: flex;
`;
const StyledButton = styled(Button)`
  width: 100;
  min-width: 0;
`;
const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      textAlign: "left"
    }
  }
}));
export const Devis: React.FC = () => {
  const classes = useStyles();
  const [currentState, setCurrentState] = useState<Array<any>>([
    {
      label: "",
      th: 0,
      hourAmount: 0,
      total: 0,
      realGain: 0
    }
  ]);

  const handleRowChange = (key: number, targettedValue: string) => (
    event: any
  ) => {
    event.persist();
    setCurrentState(prev => {
      const OLD = JSON.parse(JSON.stringify(prev));
      const OBJ = OLD[key];
      OBJ[targettedValue] = Number(event?.target.value);
      console.log(OBJ, OBJ[targettedValue]);

      if (OBJ.th && OBJ.hourAmount) {
        OBJ.total = OBJ.th * OBJ.hourAmount;
        OBJ.realGain = OBJ.total * 0.89;
      }
      return OLD;
    });
  };

  return (
    <div>
      <ExpansionPanel>
        <ExpansionPanelSummary
          aria-controls='panel1a-content'
          id='panel1a-header'
          expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
        >
          <Typography>Client</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Form>
            <TextField
              className={classes.root}
              id='standard-basic'
              label='Intitulé du projet'
            />
            <InlineDiv>
              <TextField
                className={classes.root}
                id='standard-basic'
                label='Nom de la société'
              />
              <TextField
                className={classes.root}
                id='standard-basic'
                label='N° Client'
                type='number'
              />
            </InlineDiv>

            <InlineDiv>
              <TextField
                className={classes.root}
                id='standard-basic'
                label='Ville'
              />
              <TextField
                className={classes.root}
                id='standard-basic'
                label='Code Postal'
              />
              <TextField
                className={classes.root}
                id='standard-basic'
                label='Adresse'
              />
            </InlineDiv>
          </Form>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          aria-controls='panel1a-content'
          id='panel1a-header'
          expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
        >
          <Typography>Projet(s)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Form>
            <ButtonDiv>
              <StyledButton
                variant='outlined'
                color='primary'
                onClick={event => {
                  event.persist();
                  setCurrentState(prev => [
                    ...prev,
                    {
                      label: "",
                      th: 0,
                      hourAmount: 0,
                      total: 0,
                      realGain: 0
                    }
                  ]);
                }}
              >
                +
              </StyledButton>
            </ButtonDiv>

            {currentState.map((_, key) => (
              <InlineDiv key={key}>
                <TextField
                  className={classes.root}
                  id='standard-basic'
                  label='Intitulé'
                  type='text'
                  onChange={handleRowChange(key, "label")}
                />
                <TextField
                  className={classes.root}
                  id='standard-basic'
                  label='Taux horaire'
                  type='number'
                  onChange={handleRowChange(key, "th")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>€</InputAdornment>
                    )
                  }}
                />
                <TextField
                  className={classes.root}
                  id='standard-basic'
                  label="Nomber d'heure(s)"
                  type='number'
                  onChange={handleRowChange(key, "hourAmount")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>h</InputAdornment>
                    )
                  }}
                />
                <TextField
                  className={classes.root}
                  id='standard-basic'
                  label='Total'
                  type='number'
                  disabled
                  value={currentState[key].total}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>€</InputAdornment>
                    )
                  }}
                />
                <TextField
                  className={classes.root}
                  id='standard-basic'
                  label='Gain réel'
                  disabled
                  type='number'
                  value={currentState[key].realGain}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>€</InputAdornment>
                    )
                  }}
                />
              </InlineDiv>
            ))}
            <ButtonDiv>
              <StyledButton variant='outlined' color='primary'>
                Valider
              </StyledButton>
            </ButtonDiv>
          </Form>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};
