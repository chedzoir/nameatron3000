import React, { useState } from 'react';
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    marginTop: theme.spacing(2),
  },
  about: {
    marginTop: theme.spacing(2),
    '& a': {
      margin: theme.spacing(0, 1)
    }
  },
  nameit: {
    margin: theme.spacing(3, 0, 2),
  },
  result: {
    textAlign: 'center',
    width: '100%'
  },
  results: {
    padding: theme.spacing(2)
  },
  disclaimer: {
    fontStyle: 'italic',
    cursor: 'pointer'
  },
  tagline: {
    fontStyle: 'italic'
  }
}));

function App() {

  const [itemToName, setItemToName] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false)

  function nameIt() {
    const endings = ['atron', 'anator', 'ator', 'aniser', 'iser']
    setResults(endings.map(ending => `${itemToName}${ending}`))
    setShowResults(true)
  }

  const classes = useStyles()

  return (
    <ThemeProvider theme={createMuiTheme()}>
      <Container maxWidth='sm'>
        <div className={classes.paper}>
          <Typography variant='h4'>The Nameatron 3000</Typography>
          <Typography gutterBottom variant='caption' display='block' className={classes.tagline}>Solving the hardest problem in IT</Typography>
          <form className={classes.form} noValidate autoComplete='off' onSubmit={event => { event.preventDefault(); nameIt(); return false }}>
            <TextField fullWidth id='outlined-basic' label='What do you want to name?' variant='outlined' value={itemToName} onChange={event => { setShowResults(false); setItemToName(event.target.value) }} />
            <Button fullWidth className={classes.nameit} variant='contained' color='primary' onClick={_ => nameIt()}>Name It</Button>
            {showResults ?
              <Card className={classes.results}>
                <Typography variant='body2'>Your possible names for the {itemToName} are</Typography>
                <List>
                  {results.map(result => <ListItem key={result}><Typography className={classes.result}>{result}</Typography></ListItem>)}
                </List>
              </Card> : null}
          </form>
          <Typography variant='body2' className={classes.about}>
            <Link className={classes.disclaimer} onClick={() => setShowDisclaimer(true)}>Disclaimer</Link>
             | 
             <Link href="https://github.com/chedzoir/nameatron3000">Clone on GitHub</Link>
          </Typography>
          <Dialog open={showDisclaimer} onClose={() => setShowDisclaimer(false)}>
            <DialogContent>
              <DialogTitle>Nameatron 3000 - Disclaimer</DialogTitle>
              <DialogContentText>
                <p>We take no responsibility if the name <strong>you</strong> choose is silly and makes your app / project a laughing stock.</p>
                <p>If the name you choose makes you app / project sound mega epic then of course we take the full credit.</p>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
