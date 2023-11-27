import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-block-post',
  standalone: true,
  imports: [CommonModule, CommentsComponent, NgOptimizedImage],
  templateUrl: './block-post.component.html',
  styleUrl: './block-post.component.css'
})
export class BlockPostComponent {

}
