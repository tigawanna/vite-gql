import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";


interface MuiModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}

export function MuiModal({ open, setOpen,children }: MuiModalProps) {
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={() => setOpen(false)}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <ModalDialog color="info" size="lg">
        <ModalClose />
        {children}
      </ModalDialog>
    </Modal>
  );
}
