import { inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Headers, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { DemoModule } from './demo.module';


describe('Demo', () => {
    it('should have a test', () => {
        expect(true).toBe(true);
    });
});
