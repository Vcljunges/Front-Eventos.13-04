type CustomButtonProps = {
    label: string;
    evento: () => void;
}

export default function CustomButton({label, evento}: CustomButtonProps){
    return (
        <button onClick={evento}>{label}</button>
    )
}
