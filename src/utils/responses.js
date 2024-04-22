module.exports = {
    successResponse: ({ data, message }) => {
        return {
            success: true,
            data,
            message,
        };
    },
    failedResponse: ({ data, message }) => {
        return { success: false, data, message };
    },
}