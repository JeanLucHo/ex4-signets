import "./Dossier.scss";
import { useState } from "react";
import { IconButton, Button, Box } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Popover from "@material-ui/core/Popover";
import manqueCouverture from "../images/couverture.webp";

export default function Dossier({ id, nom, couleur, datemodif, couverture }) {

  //gestion du popOver pour modifier et supprimer les dossiers
  const [positionPop, setPositionPop] = useState(null);

  function ouvrirPop(e) {
    setPositionPop(e.currentTarget);
  };

  function fermerPop() {
    setPositionPop(null);
  };

  return (
    <article className="Dossier" style={{ backgroundColor: couleur }}>
      <div className="couverture">
        <IconButton
          className="deplacer"
          aria-label="déplacer"
          disableRipple={true}
        >
          <SortIcon />
        </IconButton>
        <img src={couverture ? couverture : manqueCouverture} alt={nom} />
      </div>
      <div className="info">
        <h2>{nom}</h2>
        <p>Modifié : {formaterDate(datemodif)}</p>
      </div>
      <IconButton
        onClick={ouvrirPop}
        className="modifier"
        aria-label="modifier"
        size="small"
      >
        <MoreVertIcon />
      </IconButton>
      <Popover
        open={Boolean(positionPop)}
        anchorEl={positionPop}
        onClose={fermerPop}
      >
        <Box display="flex" flexDirection="column" padding={1}>
          <Button
            variant="text"
            style={{ textTransform: "capitalize", fontWeight: "normal" }}
          >
            Modifier
          </Button>
          <Button
            variant="text"
            style={{ textTransform: "capitalize", fontWeight: "normal" }}
          >
            Supprimer
          </Button>
        </Box>
      </Popover>
    </article>
  );
}

/**
 * Formate les objets date de Firestore et retourne une chaîne de caractères
 * @param {Object} d Objet date retourné par Firestore
 * @returns String date formatée en français
 */
function formaterDate(d) {
  const dateJs = d ? new Date(d.seconds * 1000) : new Date();
  const mois = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];
  return `${dateJs.getDate()} ${
    mois[dateJs.getMonth()]
  } ${dateJs.getFullYear()}`;
}