import conf from "../conf/conf";
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class ConfigService {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    // Create post method 
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                { title, content, featuredImage, status, userId },
            )
        } catch (error) {
            console.log('Appwrite service:: createPost error:', error);

        }
    }

    // Update post method
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                { title, content, featuredImage, status },
            )
        } catch (error) {
            console.log('Appwrite service:: updatePost error:', error);
        }
    }

    // Delete post method
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true;
        } catch (error) {
            console.log('Appwrite service:: deletePost error:', error);
            return false;
        }
    }

    // Get one post method 
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log('Appwrite service:: getPost error:', error);
            return false;
        }
    }

    // Get all posts method
    async getPosts(queries = [Query.equal('status', 'active')]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log('Appwrite service:: getAllPosts error:', error);
            return false;

        }
    }

    // File upload method
    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            );
        } catch (error) {
            console.log('Appwrite service:: uploadFile error:', error);
            return false;
        }
    }

    // File delete method 
    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId,
            );
            return true;
        } catch (error) {
            console.log('Appwrite service:: deleteFile error:', error);
            return false;
        }
    }

    // File preview method
    getFilePreview(fileId) {
        try {
            return this.storage.getFilePreview(
                conf.appwriteBucketId,
                fileId,
            );
        } catch (error) {
            console.log('Appwrite service:: getFilePreview error:', error);
            return false;
        }
    }
}

const service = new ConfigService();

export default service