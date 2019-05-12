import { Entity, Column, Index, PrimaryGeneratedColumn, Timestamp, PrimaryColumn } from 'typeorm';
import { PermissionEntity } from './permission.entity'
import { RoleEntity } from './role.entity'
import { OrganizationEntity } from './organization.entity'

@Entity({
    name: 'user'
})
export class UserEntity {

    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({
        type: 'uuid',
    })
    @Index({ unique: true })
    openid: string;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '联盟id'
    })
    @Index({ unique: true })
    unionid: string;


    @Column({
        type: 'varchar',
        length: 50
    })
    @Index({ unique: true })
    username: string;

    @Column({
        type: 'varchar',
        length: 20
    })
    password: string;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '盐'
    })
    salt: string;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '真实姓名'
    })
    realname: string;

    @Column({
        type: 'varchar',
        length: 50,
        comment: '昵称'
    })
    nickname: string;

    @Column({
        type: 'varchar',
        length: 50
    })
    avatar: string;

    @Column({
        type: 'varchar',
        length: 20
    })
    phone: string;

    @Column({
        type: 'varchar',
        length: 30
    })
    email: string;

    @Column({
        type: 'smallint',
    })
    sex: number;

    @Column({
        type: 'timestamp'
    })
    create_time: Timestamp;

    @Column({
        type: 'timestamp'
    })
    update_time: Timestamp;


    /**
     * 常用，定义一下
     */

    /**
     * 用户拥有的权限，一个用户可以有多个权限
     */
    permissions: PermissionEntity[];
    /**
     * 用户拥有的角色，一个用户可以分配多个角色
     */
    roles: RoleEntity[];
    /**
     * 用户所属组织，一个用户可以有多个组织，
     */
    organizations: OrganizationEntity[];
}