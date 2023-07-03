
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import { UpdateRepoForm } from '../repos/UpdateRepoForm';
import { RepositoriesNode } from '../../state/gql/repos/types';


interface MuiModalProps {
open: boolean;
setOpen: React.Dispatch<React.SetStateAction<boolean>>
input:RepositoriesNode
}

export function MuiModal({open,setOpen,input}:MuiModalProps){
return (
    <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >

        <ModalDialog
            color="info"
            size="lg"
        >
            <ModalClose />
            <UpdateRepoForm input={input}/>
        </ModalDialog>
    </Modal>
);
}
