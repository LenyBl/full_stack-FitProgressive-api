import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import type { CreateUserDto as userDto } from "./dto/create-user.dto";
import { Public } from "src/auth/skipAuth";
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    async findAll() {
        try {
            return await this.usersService.findAll();
        } catch (error) {
            throw new Error('Failed to fetch users');
        }
    }

    @Public()
    @Get(':id')
    async findById(@Param('id') userId: number) {
        try {
            return await this.usersService.findById(userId);
        } catch (error) {
            throw new Error('Failed to fetch user by ID');
        }
    }

    @Public()
    @Post('/create')
    async createUser(@Body() createUserDto: userDto) {
        try {
            const hashedPassword = await bcrypt.hash(createUserDto.password_hash, 10);
            createUserDto.password_hash = hashedPassword;
            return await this.usersService.createUser(createUserDto);
        } catch (error) {
            throw new Error('Failed to create user');
        }
    }

    @Delete(':id')
    async deleteById(@Param('id') userId: number) {
        try {
            return await this.usersService.deleteById(userId);
        } catch (error) {
            throw new Error('Failed to delete user by ID');
        }
    }
}