import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import { TwitterPicker } from 'react-color';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import SansCouverture from "../images/couverture.webp";

const EspaceBouton = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function AjouterDossier({ouvert, setOuvert, gererAjout}) {

  const classMargin = EspaceBouton();
  const [nom, setNom] = useState('');
  const [couverture, setCouverture] = useState(SansCouverture);
  const [couleur, setCouleur] = useState('#537169');

  function viderChamps() {
    setNom('');
    setCouverture('');
    setCouleur('#537169');
  }

  return (
    <div className="AjouterDossier">
      <Dialog open={ouvert} onClose={()=>setOuvert(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Ajouter un dossier</DialogTitle>
        <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="nomDossier"
              label="Nom du dossier"
              type="text"
              fullWidth
              onChange={(e) => setNom(e.target.value)}
              defaultValue={nom}
              style={{marginBottom : "20px"}}
            />
            <TextField
              margin="dense"
              id="urlImage"
              label="Adresse de l'image de couverture"
              type="text"
              fullWidth
              onChange={(e) => setCouverture(e.target.value)}
              defaultValue={couverture}
            />
          <TwitterPicker 
           colors={['#883392', '#213213','#231132','#859435','#627323','#231238',]}
            width="100%" 
            triangle="hide" 
            onChangeComplete={(couleur, e) => setCouleur(couleur.hex)}
            style={{marginBottom : "20px"}}
            color={couleur}
          />
        </DialogContent>
        <DialogActions className={classMargin.root}>
          <Button onClick={()=>{setOuvert(false); viderChamps()}} color="secondary" style={{backgroundColor: '#990000'}} variant="contained">
            Annuler
          </Button>
          <Button onClick={() => {nom !== '' && gererAjout(nom, couverture, couleur); viderChamps(); }} color="primary" style={{backgroundColor: '#009900'}} variant="contained">
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}