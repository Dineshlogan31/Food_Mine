import { AbstractControl } from "@angular/forms"

export const PasswordMatchValidator=(passwordControlname:string,confirmPasswordControlname:string)=>{
    const validator=(form:AbstractControl)=>{
        const passwordControl=form.get(passwordControlname)
        const confirmPassword=form.get(confirmPasswordControlname)

        if(!passwordControl || !confirmPassword) return;

        if(passwordControl.value !== confirmPassword.value)
        {
            confirmPassword.setErrors({notMatch:true})
        }
        else{
            const error=confirmPassword.errors
            if(!error) return;

            delete error.notMatch;
            confirmPassword.setErrors(error)
        }
    }
    return validator;
}