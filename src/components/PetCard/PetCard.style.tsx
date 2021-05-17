import { makeStyles } from '@material-ui/core/styles';
export const PetCardStyle = makeStyles(() => ({
    PetCard:{
        overflow: "hidden",
        width:"calc(33% - 2rem)",
        margin:"1rem"
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
