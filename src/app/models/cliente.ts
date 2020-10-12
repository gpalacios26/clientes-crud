export class Cliente{
    constructor(
        public id: number,
        public name: string,
        public surname: string,
        public email: string,
        public image: string,
        public flg_status: string,
        public created_at: any,
        public updated_at: any
    ){}
}