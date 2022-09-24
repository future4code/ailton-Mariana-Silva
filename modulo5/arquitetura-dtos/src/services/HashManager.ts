import bcrypt from 'bcryptjs'

export class HashManager {
    public hash = async (plaintext: string) => {
        const rounds = Number(process.env.BCRYPT_SALT_ROUNDS)
        const salt = await bcrypt.genSalt(rounds)
        const hash = await bcrypt.hash(plaintext, salt)

        return hash
    }

    public compare = async (plaintext: string, hash: string) => {
        return bcrypt.compare(plaintext, hash)
    }
}