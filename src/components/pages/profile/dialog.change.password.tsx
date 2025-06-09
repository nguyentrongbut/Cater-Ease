import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import FormChangePassword from "@/components/pages/profile/form.change.password";

const DialogChangePassword = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <h2 className="text-sm font-bold hover:text-primary cursor-pointer md:mr-4">Change password</h2>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="mb-6">Change password</DialogTitle>
                    <FormChangePassword></FormChangePassword>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default DialogChangePassword