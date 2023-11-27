import { Routes } from '@angular/router';
import { BlockPostComponent } from './components/block-post/block-post.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [{ path: 'blog-post', title: 'Blog', component: BlockPostComponent},
{ path: 'contact', title: 'Contact form', component: ContactComponent}];
