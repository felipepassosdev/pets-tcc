import { makeStyles } from '@material-ui/core/styles';
export const PetCardStyle = makeStyles(() => ({
    PetCard:{
        overflow: "hidden"
    },
    PetCardA: {
        textDecoration: 'none',
    },
    ImagePet:{
        width:'100%',
        objectFit:'cover',
        maxHeight:'150px'
    }

}));
