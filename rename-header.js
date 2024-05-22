document.addEventListener("DOMContentLoaded", addEventListenerToRenameButtons);
document.getElementById("add-template-btn").addEventListener("click", addEventListenerToRenameButtons);
function addEventListenerToRenameButtons(){
    const renameOptions = document.querySelectorAll('.rename-option');

    renameOptions.forEach(button => {
        button.addEventListener('click', (event) => {
            const container = event.target.closest('.template-header');
            const paragraph = container.querySelector('.editable');
            const originalText = paragraph.textContent;
            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.value = originalText;
            inputField.classList.add('rename-input');
            let target = event.target;
            target.style.transition ="0s";
            target.style.visibility = "hidden";

            // Replace the paragraph with the input field
            paragraph.replaceWith(inputField);
            inputField.focus();

            // Save the new text on Enter key press or clicking outside
            const saveText = () => {
                const newText = inputField.value;
                const newParagraph = document.createElement('p');
                newParagraph.textContent = newText;
                newParagraph.classList.add('editable');
                target.style.transition = "0.2s";
                target.style.visibility = "visible";
                // Replace the input field with the new paragraph
                inputField.replaceWith(newParagraph);
            };

            inputField.addEventListener('blur', saveText);

            inputField.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    saveText();
                }
            });
        });
    });
};
