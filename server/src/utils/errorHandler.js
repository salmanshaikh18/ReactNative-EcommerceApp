export const errorHandler = (error, errorPlace, res) => {
    console.error(`Error inside ${errorPlace}: ${error}`)
    return res.status(500).json({
        success: false,
        message: `Error inside ${errorPlace}`,
        error: error
    })
}