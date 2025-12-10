/**
 * Generates WhatsApp URL with dynamic course name
 * @param courseName - The name of the course/plan to include in the message
 * @returns The full WhatsApp URL with encoded message
 */
export const getWhatsAppUrl = (courseName: string): string => {
    const baseUrl = 'https://wa.me/5512991298390';
    const message = `Olá! Eu vim através do site e quero informações sobre o curso de ${courseName}`;
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
};

/**
 * Opens WhatsApp with the course-specific message
 * @param courseName - The name of the course/plan to include in the message
 */
export const openWhatsApp = (courseName: string): void => {
    window.open(getWhatsAppUrl(courseName), '_blank');
};
